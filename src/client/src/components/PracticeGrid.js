import classes from "../components/PracticeGrid.module.css";

const PracticeGrid = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.ul}>
          <div className={classes.li}>div1</div>
          <div className={classes.li}>div2</div>
          <div className={classes.li}>div3</div>
          <div className={classes.li}>div4</div>
        </div>
      </div>
    </div>
  );
};

export default PracticeGrid;
