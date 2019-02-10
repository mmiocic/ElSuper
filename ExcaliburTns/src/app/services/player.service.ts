import { Injectable } from '@angular/core';

export interface Player {
    id: number;
    firstname: string;
    lastname: string;
    cap: number;
}
//we will add stats to this object later on

@Injectable()
export class PlayerService {
  
    getPlayers(): Player[] {
        return players;
    }
    
    getPlayerById(playerId: number): Player {
        return players.find(p => p.id === playerId);
    }

}

//for now just using array to hold players
//eventually this service will communicate with server and DB using HTTP
const players = [
    {
        'id': 0,
        'firstname': 'Marko',
        'lastname': 'Miocic',
        'cap': 4
    },
    {
        'id': 1,
        'firstname': 'Julian',
        'lastname': 'Droetti',
        'cap': 16
    },
    {
        'id': 2,
        'firstname': 'Chris',
        'lastname': 'Ibarra',
        'cap': 1
    },
    {
        'id': 3,
        'firstname': 'Tucker',
        'lastname': 'Vejsicky',
        'cap': 9
    },
    {
        'id': 4,
        'firstname': 'Hunter',
        'lastname': 'Pelletier',
        'cap': 3
    },
    {
        'id': 5,
        'firstname': 'Daniel',
        'lastname': 'Castagnola',
        'cap': 5
    },
    {
        'id': 6,
        'firstname': 'Sebastian',
        'lastname': 'Ampuero',
        'cap': 30
    }
  ];