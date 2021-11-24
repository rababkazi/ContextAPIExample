import MyComponent from './MyComponent';
import './App.css';
import CompProvider from './CompProvider';

function App() {
	return (
		<div className="App">
			<CompProvider>
				<MyComponent />
			</CompProvider>
		</div>
	);
}

export default App;
