import React, { useRef, useEffect } from "react";
export default function Article(props) {
  let { data } = props;
  let wrap = useRef(null);
  useEffect(() => {
    let imgs = wrap.current.querySelectorAll("img");
    imgs.forEach((img) => {
      img.onload = function () {
        console.log(11);
        window.pageScroll.refresh();
      };
    });
  }, [data]);
  return (
    <div className="miiaov_article" ref={wrap}>
      <h3>
        {/* <span>妙味JS班学员</span>
        <span>李敏【但压板CSS+JS相册】作品</span> */}
        {data.title}
      </h3>
      <div className="miiaov_txt">
        dangerouslySetInnerHTML=
        {{
          __html: data.content,
        }}
      </div>
    </div>
  );
}
