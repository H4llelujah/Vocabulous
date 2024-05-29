import { Navbar } from "widget/Navbar";
import { AppRouter } from "./providers/RouteProvider";
import "./styles/index.scss";
import { Counter } from "features/Counter";

export const App = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Counter />
            <AppRouter />
        </div>
    );
};
