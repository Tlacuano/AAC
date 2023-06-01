import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../entities/AllPeopleDto";
import { UseCase } from "@/kernel/contracts";
import { PeopleRepository } from "./ports/people.repository";

export class GetAllPeopleInteractor implements UseCase<number,ResponseApi<AllPeopleDto>>{

    constructor(private peopleRepository: PeopleRepository){}

    execute(payload?: number | undefined): Promise<ResponseApi<AllPeopleDto>> {
        if(!payload) payload = 1;
        return this.peopleRepository.getPeople(payload);
    }

}