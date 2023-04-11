import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    process: {},
    phases: [],
    phase: {},
    processes: [],
    process :{}
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUSer: (state, action) => {
            state.user = action.payload;
            state.user.isLogged = true;
        },
        closeSesion: (state, action) => {
            state.user = {}
            state.isLogged = false;
        },
        allPhases: (state, action) => {
            state.phases = action.payload;
        },
        addPhase: (state, action) => {
            state.phase = {...action.payload}
        },
        addPhaseToPhases: (state, action) => {
            state.phases.push(action.payload);
        },
        modifyPhase: (state, action) => {
            const arr = state.phases.filter(p => p.id == action.payload.id)
            arr[0].nombre = action.payload.nombre;
            arr[0].objetivo = action.payload.objetivo;
            arr[0].descripcion = action.payload.descripcion;
        },
        deletePhase: (state, action) => {
            console.log(action);
            state.phases = state.phases.filter(p => p.id !== action.payload.id)
        },
        clearPhases: (state, action) => {
            state.phase = {}
        },
        allProcesses: (state, action) => {
            state.processes = action.payload;
        },
        addProcess: (state, action) => {
            console.log(action.payload);
            state.processes.push(action.payload);
        },
        deleteProcess: (state, action) => {
            state.processes = state.processes.filter(p => p.id !== action.payload.id)
        },
        addtemProcess:(state, action)=>{
            state.process = {...action.payload}
        }
    }
});

export const { loginUSer,deleteProcess,  addProcess, allProcesses, closeSesion, allPhases, addPhase, clearPhases, addPhaseToPhases, modifyPhase, deletePhase,addtemProcess } = userSlice.actions;