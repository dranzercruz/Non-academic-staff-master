import "../css/forms.css";
import FormCard from "./FormCard";
import Header from "./Header";
import Footer from "./Footer";

const Forms = () => {
  return (
    <div>
      <Header />
      <div className="form-content">
        <div className="form-heading">Request Forms</div>
        <div className="form-attributes">
          <FormCard
            title={"Leave Form"}
            content={"Open Leave Form"}
            img={
              "https://cdn.iconscout.com/icon/premium/png-256-thumb/leaving-1649219-1399243.png"
            }
            url={"/fullLeaveForm"}
          />
          <FormCard
            title={"Transfer Form"}
            content={"Open Transfer Form"}
            img={"https://static.thenounproject.com/png/2409660-200.png"}
            url={"/transferForm"}
          />
          <FormCard
            title={"Half Day Form"}
            content={"Open Half Day Form"}
            img={"https://pngimg.com/d/exit_PNG19.png"}
            url={"/halfLeaveForm"}
          />
          <FormCard
            title={"Substitute Procedure Form"}
            content={"Open Substitute Procedure Form"}
            img={"https://static.thenounproject.com/png/2118961-200.png"}
            url={"/subtitute"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Forms;
