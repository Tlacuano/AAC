import { UseCase } from "@/kernel/contracts";
import { ResponseApi } from "@/kernel/types";
import { Person } from "../entities/Person";
import { PeopleRepository } from "./ports/people.repository";

export class InsertPersonInteractor implements UseCase<Person, ResponseApi<Person>>{

    constructor(private peopleRepository : PeopleRepository){}

    execute(payload: Person): Promise<ResponseApi<Person>> {
        
        if(payload.name.length === 0){
            return {
                result: false,
                message: 'El campo de nombre es obligatorio'
            } as any
        }
        if(payload.job.length === 0){
            return {
                result: false,
                message: 'el campo de trabajo es obligatorio'
            } as any
        }

        return this.peopleRepository.insertPeople(payload)
    }

}