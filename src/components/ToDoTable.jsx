import { useState } from 'react';

export const ToDoTable = () => {
    const sampleData = [
        { id: 0, name: "Dan", lastName: "Fritz" },
        { id: 1, name: "Peter", lastName: "Parker" }
    ]

    const [stateData, setStateData] = useState(sampleData)

    const nextId = () => stateData.reduce((max, obj) => {
        return (obj.id > max.id ? obj : max)
    }, stateData[0])

    const clickHandler = () => {
        const auxData = [...stateData, { id: (stateData.length > 0 ? nextId().id + 1 : 0), name: 'Enter Name', lastName: 'Enter lastName' }]
        setStateData(auxData)
    }

    const deleteRow = (rowId) => {
        const auxData = stateData.filter((item) => item.id !== rowId)
        setStateData(auxData)
    }

    const handleChange = (event, fieldName, id) => {
        const foundObject = stateData.find(elem => {
            return elem.id === id
        })
        const newObject = { ...foundObject, [fieldName]: event.target.value }
        const updatedArray = stateData.map(obj => {
            return obj.id === newObject.id ? { ...obj, ...newObject } : obj
        })
        setStateData(updatedArray)
    }

    return (
        <>
            <table>
                <tbody>
                    {stateData.map((item, ndx) =>
                        <tr key={ndx}>
                            <td className='table-cel'>
                                <input
                                    type="text"

                                    value={item.id}
                                    readOnly
                                />
                            </td>
                            <td>
                                <input
                                    type="text"

                                    value={item.name}
                                    onChange={(e) => handleChange(e, 'name', item.id)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"

                                    value={item.lastName}
                                    onChange={(e) => handleChange(e, 'lastName', item.id)}
                                />
                            </td>
                            <td>
                                <button
                                    onClick={() => { deleteRow(item.id) }}
                                    style={{ backgroundColor: "black", color: "white" }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "gray")}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "black")}
                                >
                                    deleteRow
                                </button>
                            </td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
            <button
                onClick={() => clickHandler()}
                style={{ backgroundColor: 'gray', color: 'white' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "black")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "gray")}
            >
                add row
            </button>
        </>
    )
}