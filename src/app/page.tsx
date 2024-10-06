import Image from "next/image";
import image from "../../image/image.jpg";

export default function Header() {
  return (
    <div className="homeContainer">
      <div className="childContainer">
        Hey
        <br />
        My Name Is 
        <span className="aqua"> Muhammad Rehman</span>
        <br />
        Student Of Governer Initiative.
      </div>
      <div className="childContainer2">
        <Image
          className="profile"
          src={image}
          alt="profilePicture"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}