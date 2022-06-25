import CategoriesData from "../Category-Item/CategoriesData";
import CategoryItem from "../Category-Item/CategoryItem";
import "./Directory.component.scss";
const Directory = () => {
    return (
        <div className="directory-container">
            {CategoriesData.map((category) => {
                return (
                    <CategoryItem key={category.id} category={category} />
                )
            })}


        </div>
    )
}

export default Directory;