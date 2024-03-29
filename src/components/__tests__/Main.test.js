import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { FILMS_QUERY, Main } from '../Main';

const mocks = [
    {
        request: {
            query: FILMS_QUERY,
        },
        result: {
        data: {
            allFilms: {
              films: [
                {
                  "title": "A New Hope",
                  "director": "George Lucas",
                  "releaseDate": "1977-05-25",
                  "speciesConnection": {
                    "species": [
                      {
                        "name": "Human",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Coruscant"
                        }
                      },
                      {
                        "name": "Droid",
                        "classification": "artificial",
                        "homeworld": null
                      },
                      {
                        "name": "Wookie",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Kashyyyk"
                        }
                      },
                      {
                        "name": "Rodian",
                        "classification": "sentient",
                        "homeworld": {
                          "name": "Rodia"
                        }
                      },
                      {
                        "name": "Hutt",
                        "classification": "gastropod",
                        "homeworld": {
                          "name": "Nal Hutta"
                        }
                      }
                    ]
                  }
                },
                {
                  "title": "The Empire Strikes Back",
                  "director": "Irvin Kershner",
                  "releaseDate": "1980-05-17",
                  "speciesConnection": {
                    "species": [
                      {
                        "name": "Human",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Coruscant"
                        }
                      },
                      {
                        "name": "Droid",
                        "classification": "artificial",
                        "homeworld": null
                      },
                      {
                        "name": "Wookie",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Kashyyyk"
                        }
                      },
                      {
                        "name": "Yoda's species",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "unknown"
                        }
                      },
                      {
                        "name": "Trandoshan",
                        "classification": "reptile",
                        "homeworld": {
                          "name": "Trandosha"
                        }
                      }
                    ]
                  }
                },
                {
                  "title": "Return of the Jedi",
                  "director": "Richard Marquand",
                  "releaseDate": "1983-05-25",
                  "speciesConnection": {
                    "species": [
                      {
                        "name": "Human",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Coruscant"
                        }
                      },
                      {
                        "name": "Droid",
                        "classification": "artificial",
                        "homeworld": null
                      },
                      {
                        "name": "Wookie",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Kashyyyk"
                        }
                      },
                      {
                        "name": "Hutt",
                        "classification": "gastropod",
                        "homeworld": {
                          "name": "Nal Hutta"
                        }
                      },
                      {
                        "name": "Yoda's species",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "unknown"
                        }
                      },
                      {
                        "name": "Mon Calamari",
                        "classification": "amphibian",
                        "homeworld": {
                          "name": "Mon Cala"
                        }
                      },
                      {
                        "name": "Ewok",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Endor"
                        }
                      },
                      {
                        "name": "Sullustan",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Sullust"
                        }
                      },
                      {
                        "name": "Twi'lek",
                        "classification": "mammals",
                        "homeworld": {
                          "name": "Ryloth"
                        }
                      }
                    ]
                  }
                },
                {
                  "title": "The Phantom Menace",
                  "director": "George Lucas",
                  "releaseDate": "1999-05-19",
                  "speciesConnection": {
                    "species": [
                      {
                        "name": "Human",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Coruscant"
                        }
                      },
                      {
                        "name": "Droid",
                        "classification": "artificial",
                        "homeworld": null
                      },
                      {
                        "name": "Yoda's species",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "unknown"
                        }
                      },
                      {
                        "name": "Neimodian",
                        "classification": "unknown",
                        "homeworld": {
                          "name": "Cato Neimoidia"
                        }
                      },
                      {
                        "name": "Gungan",
                        "classification": "amphibian",
                        "homeworld": {
                          "name": "Naboo"
                        }
                      },
                      {
                        "name": "Toydarian",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Toydaria"
                        }
                      },
                      {
                        "name": "Dug",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Malastare"
                        }
                      },
                      {
                        "name": "Twi'lek",
                        "classification": "mammals",
                        "homeworld": {
                          "name": "Ryloth"
                        }
                      },
                      {
                        "name": "Aleena",
                        "classification": "reptile",
                        "homeworld": {
                          "name": "Aleen Minor"
                        }
                      },
                      {
                        "name": "Vulptereen",
                        "classification": "unknown",
                        "homeworld": {
                          "name": "Vulpter"
                        }
                      },
                      {
                        "name": "Xexto",
                        "classification": "unknown",
                        "homeworld": {
                          "name": "Troiken"
                        }
                      },
                      {
                        "name": "Toong",
                        "classification": "unknown",
                        "homeworld": {
                          "name": "Tund"
                        }
                      },
                      {
                        "name": "Cerean",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Cerea"
                        }
                      },
                      {
                        "name": "Nautolan",
                        "classification": "amphibian",
                        "homeworld": {
                          "name": "Glee Anselm"
                        }
                      },
                      {
                        "name": "Zabrak",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Iridonia"
                        }
                      },
                      {
                        "name": "Tholothian",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Tholoth"
                        }
                      },
                      {
                        "name": "Iktotchi",
                        "classification": "unknown",
                        "homeworld": {
                          "name": "Iktotch"
                        }
                      },
                      {
                        "name": "Quermian",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Quermia"
                        }
                      },
                      {
                        "name": "Kel Dor",
                        "classification": "unknown",
                        "homeworld": {
                          "name": "Dorin"
                        }
                      },
                      {
                        "name": "Chagrian",
                        "classification": "amphibian",
                        "homeworld": {
                          "name": "Champala"
                        }
                      }
                    ]
                  }
                },
                {
                  "title": "Attack of the Clones",
                  "director": "George Lucas",
                  "releaseDate": "2002-05-16",
                  "speciesConnection": {
                    "species": [
                      {
                        "name": "Human",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Coruscant"
                        }
                      },
                      {
                        "name": "Droid",
                        "classification": "artificial",
                        "homeworld": null
                      },
                      {
                        "name": "Yoda's species",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "unknown"
                        }
                      },
                      {
                        "name": "Gungan",
                        "classification": "amphibian",
                        "homeworld": {
                          "name": "Naboo"
                        }
                      },
                      {
                        "name": "Toydarian",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Toydaria"
                        }
                      },
                      {
                        "name": "Twi'lek",
                        "classification": "mammals",
                        "homeworld": {
                          "name": "Ryloth"
                        }
                      },
                      {
                        "name": "Geonosian",
                        "classification": "insectoid",
                        "homeworld": {
                          "name": "Geonosis"
                        }
                      },
                      {
                        "name": "Mirialan",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Mirial"
                        }
                      },
                      {
                        "name": "Clawdite",
                        "classification": "reptilian",
                        "homeworld": {
                          "name": "Zolan"
                        }
                      },
                      {
                        "name": "Besalisk",
                        "classification": "amphibian",
                        "homeworld": {
                          "name": "Ojom"
                        }
                      },
                      {
                        "name": "Kaminoan",
                        "classification": "amphibian",
                        "homeworld": {
                          "name": "Kamino"
                        }
                      },
                      {
                        "name": "Skakoan",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Skako"
                        }
                      },
                      {
                        "name": "Muun",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Muunilinst"
                        }
                      },
                      {
                        "name": "Togruta",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Shili"
                        }
                      }
                    ]
                  }
                },
                {
                  "title": "Revenge of the Sith",
                  "director": "George Lucas",
                  "releaseDate": "2005-05-19",
                  "speciesConnection": {
                    "species": [
                      {
                        "name": "Human",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Coruscant"
                        }
                      },
                      {
                        "name": "Droid",
                        "classification": "artificial",
                        "homeworld": null
                      },
                      {
                        "name": "Wookie",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Kashyyyk"
                        }
                      },
                      {
                        "name": "Yoda's species",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "unknown"
                        }
                      },
                      {
                        "name": "Twi'lek",
                        "classification": "mammals",
                        "homeworld": {
                          "name": "Ryloth"
                        }
                      },
                      {
                        "name": "Toong",
                        "classification": "unknown",
                        "homeworld": {
                          "name": "Tund"
                        }
                      },
                      {
                        "name": "Cerean",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Cerea"
                        }
                      },
                      {
                        "name": "Tholothian",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Tholoth"
                        }
                      },
                      {
                        "name": "Iktotchi",
                        "classification": "unknown",
                        "homeworld": {
                          "name": "Iktotch"
                        }
                      },
                      {
                        "name": "Quermian",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Quermia"
                        }
                      },
                      {
                        "name": "Kel Dor",
                        "classification": "unknown",
                        "homeworld": {
                          "name": "Dorin"
                        }
                      },
                      {
                        "name": "Chagrian",
                        "classification": "amphibian",
                        "homeworld": {
                          "name": "Champala"
                        }
                      },
                      {
                        "name": "Geonosian",
                        "classification": "insectoid",
                        "homeworld": {
                          "name": "Geonosis"
                        }
                      },
                      {
                        "name": "Mirialan",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Mirial"
                        }
                      },
                      {
                        "name": "Clawdite",
                        "classification": "reptilian",
                        "homeworld": {
                          "name": "Zolan"
                        }
                      },
                      {
                        "name": "Skakoan",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Skako"
                        }
                      },
                      {
                        "name": "Muun",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Muunilinst"
                        }
                      },
                      {
                        "name": "Togruta",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Shili"
                        }
                      },
                      {
                        "name": "Kaleesh",
                        "classification": "reptile",
                        "homeworld": {
                          "name": "Kalee"
                        }
                      },
                      {
                        "name": "Pau'an",
                        "classification": "mammal",
                        "homeworld": {
                          "name": "Utapau"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
    }
];
it('renders without error',()=> {
    const component = TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Main name="Buck" />
        </MockedProvider>,
      );
    
      const tree = component.toJSON();
      expect(tree.children).toContain('Loading...');
    });