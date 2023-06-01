import { ResponseApi } from "@/kernel/types";
import { GetAllPeopleInteractor } from "../use-cases/get-all-people.interactor";
import { PeopleRepository } from "../use-cases/ports/people.repository";
import { PeopleStorageGateway } from "./people-storage.gateway";
import { AllPeopleDto } from "../entities/AllPeopleDto";
import { Person } from "../entities/Person";
import { InsertPersonInteractor } from "../use-cases/insert-person.interactor";

export class PeopleController {

    getAllPeople(payload?: number) {
        try {
            const repository: PeopleRepository = new PeopleStorageGateway();
            const interactor: GetAllPeopleInteractor = new GetAllPeopleInteractor(repository);
            return interactor.execute(payload);
        } catch (error) {
            return {
                result: false,
                message: error
            } as ResponseApi<AllPeopleDto>;
        }
    }

    insertPerson(payload: Person){
        try {
            const repository: PeopleRepository = new PeopleStorageGateway();
            const interactor: InsertPersonInteractor = new InsertPersonInteractor(repository);
            return interactor.execute(payload);
        } catch (error) {
            return {
                result: false,
                message: error
            } as ResponseApi<Person>
        }
    }
}