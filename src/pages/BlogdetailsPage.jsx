import data from "../assets/data.json";
import { useParams } from "react-router-dom";

const BlogdetailsPage = () => {
  const allBlog = data.find((postData) => {
    const { id } = useParams();
    return postData.id == id;
  });
  // console.log(allBlog);
  return (
    <div className="px-20 py-10 space-y-3 mt-10 max-w-4xl mx-auto flex flex-col bg-cream-brown">
      <h1 className="text-2xl font-bold text-dark-brown text-center">
        {allBlog.heading}
      </h1>
      <p className="text-lg font-medium text-dark-brown text-center">
        {allBlog.date}
      </p>
      <img src={allBlog.image} alt="" className="items-center " />

      <div className="py-5 text-justify space-y-5">
        <h3 className="text-lg font-medium">{allBlog.content.heading}</h3>
        <p>{allBlog.description}</p>
        <p>{allBlog.content.data1}</p>
        <p>{allBlog.content.data2}</p>
        <p>{allBlog.content.data3}</p>
      </div>
    </div>
  );
};

export default BlogdetailsPage;
