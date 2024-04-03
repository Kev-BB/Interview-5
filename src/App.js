import React, { useEffect, useState, useRef } from "react";

function App() {
  // KODUNU BURAYA GELECEK
  const [items, setItems] = useState([]);
  const [text, setText] = useState([])
  const [selectedItem, setSelectedItem] = useState(null);

  function handleChange(e){
    const textInput = e.target.value;
    setText(textInput)
  }

  const handleAddItem = (e) => {
    e.preventDefault();
      setItems((prevItems) => [...prevItems, text]);

  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="flex justify-center items-center gap-4 flex-col m-24">
      <form onSubmit={handleAddItem}>
        <input
          className="border-2 border-gray-600"
          type="text"
          placeholder="Add something to the list"
          value={text}
          onChange={handleChange}
        />
      </form>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(item)}
            className="cursor-pointer"
          >
            {item.length <= 6 ? item : `${item.slice(0, 5)}...`}
          </li>
        ))}
      </ul>
      {selectedItem && selectedItem.length >= 6 &&(
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-black text-white p-4 rounded-lg">
            <p>Full Text: {selectedItem}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-2 py-1 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
