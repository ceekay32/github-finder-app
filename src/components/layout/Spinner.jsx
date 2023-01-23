import spinner from "./assets/spinner1.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img width={180} className="text-center mx-auto" src={spinner} alt="" />
    </div>
  );
}

export default Spinner;
