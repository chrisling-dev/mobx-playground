import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useRootStore } from "../context/RootStoreProvider";
import { observer } from "mobx-react-lite";

const Home: NextPage = () => {
  const { counterStore } = useRootStore();
  const { counter, wrongCounter } = counterStore;
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
        <h2>Proper counter</h2>
        <p>Counter: {counter === undefined ? "Not initialized" : counter}</p>
        <button onClick={() => counterStore.increase()}>
          {counter === undefined ? "start" : "increase"}
        </button>
      </div>
      <div>
        <h2>Wrong counter</h2>
        <p>
          Counter:{" "}
          {wrongCounter === undefined ? "Not initialized" : wrongCounter}
        </p>
        <button onClick={() => counterStore.increaseWrongCounter()}>
          {wrongCounter === undefined ? "start" : "increase"}
        </button>
      </div>
    </div>
  );
};

export default observer(Home);
