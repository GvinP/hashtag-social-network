import React, { useCallback } from "react";
import avatar from "../../images/User-avatar.png";
import { usersPage } from "../../redux/usersReducer";
import { Loader } from "../common/loader/Loader";
import { NavLink } from "react-router-dom";
import { usePagination } from "../../hooks/usePagination";
import style from "./Users.module.css";

type UsersPropsType = {
  usersPage: usersPage;
  followTC: (userId: number) => void;
  unfollowTC: (userId: number) => void;
  onClickPage: (page: number) => void;
  setFollowingProgress: (follow: boolean, id: number) => void;
};

export const Users = (props: UsersPropsType) => {
  const { nextPage, prevPage, page, gaps, setPage, totalPages } = usePagination(
    {
      contentPerPage: props.usersPage.pageSize,
      count: props.usersPage.totalCount,
    }
  );

  const onPageClickHandler = useCallback(
    (page: number) => {
      props.onClickPage(page);
      setPage(page);
    },
    [page]
  );
  const prevPageHandler = () => {
    props.onClickPage(page - 1);
    prevPage();
  };
  const nextPageHandler = () => {
    props.onClickPage(page + 1);
    nextPage();
  };
  return (
    <div className={style.userPage}>
      {props.usersPage.isLoading ? <Loader /> : null}
      <div className={style.pagination}>
        <button
          onClick={prevPageHandler}
          className={`${style.page} ${page === 1 && style.disabled}`}
          disabled={page === 1}
        >
          &larr;
        </button>
        <button
          onClick={() => onPageClickHandler(1)}
          className={`${style.page} ${page === 1 && style.active}`}
          disabled={page === 1}
        >
          1
        </button>
        {gaps.before ? "..." : null}
        {gaps.paginationGroup.map((el) => (
          <button
            onClick={() => onPageClickHandler(el)}
            key={el}
            className={`${style.page} ${page === el ? style.active : ""}`}
          >
            {el}
          </button>
        ))}
        {gaps.after ? "..." : null}
        <button
          onClick={() => onPageClickHandler(totalPages)}
          className={`${style.page} ${page === totalPages && style.active}`}
          disabled={page === totalPages}
        >
          {totalPages}
        </button>
        <button
          onClick={nextPageHandler}
          className={`${style.page} ${page === totalPages && style.disabled}`}
          disabled={page === totalPages}
        >
          &rarr;
        </button>
      </div>
      {props.usersPage.users
        // .slice(firstContentIndex, lastContentIndex)
        .map((u) => (
          <div key={u.id + u.name} className={style.userContainer}>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small ? u.photos.small : avatar}
                style={{ width: "60px", height: "60px" }}
                className={style.avatar}
                alt={"avatar"}
              />
            </NavLink>
            <div className={style.userInfo}>
              <div className={style.userName}>{u.name}</div>
              <div className={style.userStatus}>{u.status}</div>
              <button
                disabled={props.usersPage.followingProgress.some(
                  (el) => el === u.id
                )}
                className={style.button}
                onClick={() => {
                  props.setFollowingProgress(true, u.id);
                  u.followed ? props.unfollowTC(u.id) : props.followTC(u.id);
                }}
              >
                {u.followed ? "unfollow" : "follow"}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
