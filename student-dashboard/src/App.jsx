import StatCard from "./components/StatCard";

function App() {
  return (
    <div className="App">
      <h1>Student Dashboard</h1>
      <StatCard
      title="Total Courses"
      value="12"
      icon="📚"
    />
    <StatCard
      title="Completed Courses"
      value="8"
      icon="✅"
    />
    <StatCard
      title="Pending Courses"
      value="4"
      icon="⏳"
    />
      
    </div>
  );

}
export default App;
