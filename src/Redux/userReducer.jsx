import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name: 'data',
    initialState: {
        userData: [{
            name: "Venkatesh",
            dob: "22071995",
            mobile: "9902336331",
            batch: "B38WET",
            teacher: "Guna"
        }, {
            name: "Sathya",
            dob: "22071997",
            mobile: "99023361221",
            batch: "B38WET",
            teacher: "Rahu"
        }, {
            name: "Lucky",
            dob: "22071991",
            mobile: "23331133",
            batch: "B38WET",
            teacher: "Pushpa"
        }
        ]
    },
    reducers: {
        addUser: (state, action) => {
            state.userData.push(action.payload)
        },
        editUser: (state, action) => {
            state.userData.splice(action.payload.index, 1, action.payload.data)
        },
        deleteUser: (state, action) => {
            state.userData.splice(action.payload.index, 1)
        }
    }
})

export const { addUser, editUser, deleteUser } = userReducer.actions
export default userReducer.reducer