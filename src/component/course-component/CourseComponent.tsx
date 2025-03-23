import {FC} from "react";
import {ICourseModel} from "../../models/CourseModel.ts";

type CourseComponentProps = {
    course: ICourseModel;
}
export const CourseComponent: FC<CourseComponentProps> = ({course}) => {
    return (
        <li>{course.title} {course.monthDuration}</li>
    )
}