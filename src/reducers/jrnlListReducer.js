const initialState = [
  {
		id: 1,
		title: "Liters of Water",
		description: "Liters of Water",
		createdOn: "2017-04-21T07:32:55Z",
		editedOn: "2017-04-21T07:32:55Z",
		defaultIncrement: 1,
		isActive: true,
    count: 20
	}, {
		id: 2,
		title: "Wall Climbs",
		description: "Completed Wall Climbs",
		createdOn: "2016-12-17T03:46:57Z",
		editedOn: "2017-02-09T10:18:45Z",
		defaultIncrement: 1,
		isActive: true,
    count: 3
	}, {
		id: 3,
		title: "Veggie Servings",
		description: "Veggie Servings",
		createdOn: "2017-06-22T14:16:01Z",
		editedOn: "2017-11-18T17:36:45Z",
		defaultIncrement: 999,
		isActive: true,
    count: 999
	},
  {
		id: 4,
		title: "Thoughts restructured",
		description: "CBT Thought restructuring exercises completed",
		createdOn: "2017-06-22T14:16:01Z",
		editedOn: "2017-11-18T17:36:45Z",
		defaultIncrement: 1,
		isActive: true,
    count: 1
	}
]


export default function jrnls(state = initialState, action){
  switch (action.type){
    default:
      return state
  }
}
