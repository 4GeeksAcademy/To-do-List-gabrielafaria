import React, { useState } from "react";



//create your first component
const Home = () => {

	const [chores, setChores] = useState(["Vaccum", "clean","buy cat food", "Dust"])
	const [newchore,setNewChore] = useState([""])
	const nextChore =()=>{
		setChores([newchore,...chores])
		setNewChore("")
	}


		
	
	const deleteChore = (item) =>{

		const filteredChores = chores.filter(
			(choredata) => choredata != item
		)
		console.log("dust: ", filteredChores)
		setChores(filteredChores)

	}
	return (
		<div className="text-center">
			<h1> To Do List</h1>
			<input 
			value={newchore}
			className=""
			type="text"
			placeholder="Add new task"
			onChange= {(e) =>{

				const newTask = e.target.value
				setNewChore(newTask)
			}
			}
			onKeyDown={(e)=>{
				if (e.key == "Enter"){
					nextChore(newchore)
					}
				}		
			}
			/>
			<button onClick={() => nextChore()}>
				Add Task
			</button>
			<ul>
				{chores.map((item, i) => {
				return (
					<div>
						<li key={i + "chores"}>{item}</li>	
					<span
					 style={{ cursor: "pointer", marginLeft: "8px", color: "red" }}
					onClick={()=> {
						deleteChore(item)
					}
				}
					> X </span>

				
				</div>
				)}
			
			)}	
			</ul>

		</div>
	
	);
};

export default Home;