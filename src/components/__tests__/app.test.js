import { render, screen, cleanup } from "@testing-library/react"
import renderer from "react-test-renderer";
import Main from "../Main";
import App from "../../App";

afterEach(()=> {
   cleanup();
});

test('should render App component',() => {
   render(<App/>);
   const MainElement = screen.getByTestId('main-1');
   expect(MainElement).toBeInTheDocument();
   expect(MainElement).toHaveTextContent('Loading...');
})

test('should not contain strike component', ()=>{
   render(<App/>);
   const Main = screen.getByTestId('main-1');
   expect(Main).not.toContainHTML('strike');
})

test('matches snapshot', ()=> {
   const tree = renderer.create(<App/>).toJSON();
   console.log(tree);
   expect(tree).toMatchSnapshot();
})