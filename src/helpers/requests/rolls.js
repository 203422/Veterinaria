import { axiosCreate } from "../axios"

export const getRolls = async() => {
    return await axiosCreate().get('rolls/getRolls');
}