import {coursesAndDurationArray} from "../../arrays.ts";
import {ICourseModel} from "../../models/CourseModel.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CoursesComponent = () => {
    return (
        <div>
            {
                coursesAndDurationArray.map((course: ICourseModel, index: number) => {
                    return <CourseComponent course={course} key={index} />;
                })
            }
        </div>
    )
}