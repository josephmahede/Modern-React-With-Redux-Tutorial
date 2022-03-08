import React from "react";
import faker from "@faker-js/faker";
import moment from "moment";

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {faker.name.findName()}
                </a>
                <div className="metadata">
                    <span className="date">{moment(faker.date.recent()).calendar()}</span>
                </div>
                <div className="text">{faker.lorem.sentence()}</div>
            </div>
        </div>
    );
};

export default CommentDetail;