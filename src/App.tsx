import { useState } from "react";
import Navbar from "./components/navbar";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.ContactUs
  );
  console.log(selectedPage);

  return (
    <div className="app bg-orange-100">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
