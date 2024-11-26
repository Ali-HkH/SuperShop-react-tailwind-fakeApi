import React from "react";
import CommentBox from "../CommentBox/CommentBox";

function Comments() {
   return (
      <div className="my-12">
         <h1 className="mb-3 text-[22px] font-bold">4 COMMENTS</h1>
         <div className="flex flex-col items-start justify-start">
            <CommentBox
               img={`${process.env.PUBLIC_URL}/images/review/review-1.jpg`}
               name="STEVEN JOHNSON"
               date="july 06 2018"
               isReply={false}
            />
            <CommentBox
               img={`${process.env.PUBLIC_URL}/images/review/review-5.jpeg`}
               name="Tayllor Tr-Haits"
               date="july 07 2018"
               isReply={true}
            />
            <CommentBox
               img={`${process.env.PUBLIC_URL}/images/review/review-3.jpg`}
               name="SONIA BLADE"
               date="April 01 2018"
               isReply={false}
            />
            <CommentBox
               img={`${process.env.PUBLIC_URL}/images/review/review-5.jpeg`}
               name="Tayllor Tr-Haits"
               date="April 03 2018"
               isReply={true}
            />
         </div>
      </div>
   );
}

export default Comments;
