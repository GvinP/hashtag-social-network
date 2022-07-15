import React, {useCallback} from "react";
import avatar from "../../images/User-avatar.png";
import {usersPage} from "../../redux/usersReducer";
import {Loader} from "../common/loader/Loader";
import {NavLink} from "react-router-dom";
import {usePagination} from "../../hooks/usePagination";


type UsersPropsType = {
    usersPage: usersPage
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    onClickPage: (page: number) => void
    setFollowingProgress: (follow: boolean, id: number) => void
}

export const Users = (props: UsersPropsType) => {
    const {
        nextPage,
        prevPage,
        page,
        gaps,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: props.usersPage.pageSize,
        count: props.usersPage.totalCount
    })

    const onPageClickHandler = useCallback((page: number) => {
        props.onClickPage(page)
        setPage(page)
    }, [page])
    const prevPageHandler = () => {
        props.onClickPage(page-1)
        prevPage()
    }
    const nextPageHandler = () => {
        props.onClickPage(page+1)
        nextPage()
    }
    return (
        <>
            {props.usersPage.isLoading ? <Loader/> : null}
            <div className="pagination">
                <p className="text">
                    {page}/{totalPages}
                </p>
                <button
                    onClick={prevPageHandler}
                    className={`page ${page === 1 && "disabled"}`}
                >
                    &larr;
                </button>
                <button
                    onClick={() => onPageClickHandler(1)}
                    className={`page ${page === 1 && "disabled"}`}
                >
                    1
                </button>
                {gaps.before ? "..." : null}
                {gaps.paginationGroup.map((el) => (
                    <button
                        onClick={() => onPageClickHandler(el)}
                        key={el}
                        className={`page ${page === el ? "active" : ""}`}
                    >
                        {el}
                    </button>
                ))}
                {gaps.after ? "..." : null}
                <button
                    onClick={() => onPageClickHandler(totalPages)}
                    className={`page ${page === totalPages && "disabled"}`}
                >
                    {totalPages}
                </button>
                <button
                    onClick={nextPageHandler}
                    className={`page ${page === totalPages && "disabled"}`}
                >
                    &rarr;
                </button>
            </div>
            {props.usersPage.users
                // .slice(firstContentIndex, lastContentIndex)
                .map((u) => (
                    <div key={u.id + u.name}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small ? u.photos.small : avatar}
                                 style={{width: '60px', height: '60px'}} alt={'avatar'}/>
                        </NavLink>

                        <div>{u.name}</div>
                        <button
                            disabled={props.usersPage.followingProgress.some(el => el === u.id)}
                            onClick={() => {
                                props.setFollowingProgress(true, u.id)
                                u.followed ?
                                    props.unfollowTC(u.id)
                                    : props.followTC(u.id)

                            }}>{u.followed ? 'unfollow' : 'follow'}</button>
                        <div>{u.status}</div>
                    </div>
                ))}
        </>
    )
}