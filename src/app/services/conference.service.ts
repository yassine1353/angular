import { Injectable } from '@angular/core';
import { Conference } from '../models/conference';

@Injectable({ providedIn: 'root' })
export class ConferenceService {
  private readonly conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 : Signals et routage',
      speaker: 'Sarra Ben Ali',
      date: '2026-11-05',
      location: 'Tunis - Salle A',
      description: 'Découvrez les Signals, input() et toSignal() appliqués au routeur.',
      price: 30,
    },
    {
      id: 2,
      title: 'Architecture front-end modulaire',
      speaker: 'Mehdi Trabelsi',
      date: '2026-11-12',
      location: 'Sfax - Salle B',
      description: 'Lazy loading, child routes et organisation par fonctionnalités.',
      price: 25,
    },
    {
      id: 3,
      title: 'Performance web',
      speaker: 'Ines Gharbi',
      date: '2026-11-20',
      location: 'Sousse - Amphi 1',
      description: 'Réduire le temps de chargement initial de vos applications.',
      price: 20,
    },
  ];

  getAll(): Conference[] {
    return this.conferences;
  }

  getById(id: number): Conference | undefined {
    return this.conferences.find((c) => c.id === id);
  }
}
