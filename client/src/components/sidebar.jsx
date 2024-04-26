function Sidebar({ isOpen, toggleSidebar, submittedSentences }) {
    return (
       <div className={`fixed right-0 top-0 w-80 h-full bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         <button onClick={toggleSidebar} className="absolute top-0 right-0 m-4">Close</button>
         <h3 className="mb-4">Submitted Sentences:</h3>
         <ul>
           {submittedSentences.map((sentence, index) => (
             <li key={index} className="mb-2">{sentence}</li>
           ))}
         </ul>
       </div>
    );
   }
   