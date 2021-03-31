import React, { memo, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";

export type ExpanseProps = {
  show: boolean;
  children?: ReactNode;
};
const elTransition = "0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out";

export default memo(function Expanse(props: ExpanseProps) {
  const { show } = props;
  const onEnter = (el: any) => {
    el.style.transition = elTransition;
    if (!el.dataset) el.dataset = {};

    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;

    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  };
  const onEntering = (el: any) => {
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + "px";
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    } else {
      el.style.height = "";
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }

    el.style.overflow = "hidden";
  };
  const onEntered = (el: any) => {
    el.style.transition = "";
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
  };
  const onExit = (el: any) => {
    if (!el.dataset) el.dataset = {};
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;

    el.style.height = el.scrollHeight + "px";
    el.style.overflow = "hidden";
  };
  const onExiting = (el: any) => {
    if (el.scrollHeight !== 0) {
      el.style.transition = elTransition;
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  };
  const onExited = (el: any) => {
    el.style.transition = "";
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  };
  return (
    <CSSTransition
      in={show}
      timeout={300}
      unmountOnExit
      onEnter={onEnter}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}>
      {props.children}
    </CSSTransition>
  );
});
