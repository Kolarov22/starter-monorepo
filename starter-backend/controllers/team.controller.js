import Team from "../models/team.model.js";

export const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().select("-__v -_id");
    res.status(200).json(teams);
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTeamByName = async (req, res) => {
  const { name } = req.params;
  try {
    const team = await Team.findOne({ name: name }).select("-__v -_id");
    if (team.length === 0) {
      return res.status(404).json({ message: "Team not found" });
    } else {
      return res.status(200).json(team);
    }
  } catch (error) {
    console.error("Error fetching team:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createTeam = async (req, res) => {
  const team = req.body;
  try {
    const createdTeam = await Team.create(team);
    res.status(201).json(createdTeam);
  } catch (error) {
    console.error("Error creating team:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const voteForTeam = async (req, res) => {
  const { name } = req.params;
  try {
    const team = await Team.findOne({ name: name });
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }
    team.votes += 1;
    await team.save();

    res.status(200).json({
      message: "Vote counted successfully",
    });
  } catch (error) {
    console.error("Error voting for team:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const populateDb = async (req, res) => {
  const teams = [
    {
      name: "Liverpool",
      logo: "https://images.seeklogo.com/logo-png/27/2/liverpool-fc-logo-png_seeklogo-272372.png",
      country: "England",
      league: "Premier League",
      stadium: "Anfield",
      votes: 5,
      players: [
        "Alisson",
        "Alexander-Arnold",
        "Van Dijk",
        "Matip",
        "Robertson",
        "Fabinho",
        "Henderson",
        "Thiago",
        "Salah",
        "Nunez",
        "Gakpo",
      ],
    },
    {
      name: "Real",
      logo: "https://images.seeklogo.com/logo-png/11/2/real-madrid-c-f-logo-png_seeklogo-116415.png",
      country: "Spain",
      league: "La Liga",
      stadium: "Santiago Bernabéu Stadium",
      votes: 3,
      players: [
        "Courtois",
        "Carvajal",
        "Militao",
        "Rüdiger",
        "Alaba",
        "Camavinga",
        "Kroos",
        "Bellingham",
        "Rodrygo",
        "Vinícius Jr.",
        "Joselu",
      ],
    },
    {
      name: "Bayern",
      logo: "https://images.seeklogo.com/logo-png/19/2/bayern-munchen-logo-png_seeklogo-198961.png",
      country: "Germany",
      league: "Bundesliga",
      stadium: "Allianz Arena",
      votes: 4,
      players: [
        "Neuer",
        "Mazraoui",
        "De Ligt",
        "Kim Min-jae",
        "Davies",
        "Kimmich",
        "Goretzka",
        "Musiala",
        "Sané",
        "Kane",
        "Coman",
      ],
    },
    {
      name: "PSG",
      logo: "https://images.seeklogo.com/logo-png/25/2/psg-logo-png_seeklogo-256583.png",
      country: "France",
      league: "Ligue 1",
      stadium: "Parc des Princes",
      votes: 2,
      players: [
        "Donnarumma",
        "Hakimi",
        "Marquinhos",
        "Skriniar",
        "Hernandez",
        "Vitinha",
        "Ugarte",
        "Ruiz",
        "Dembele",
        "Gonçalo Ramos",
        "Mbappé",
      ],
    },
    {
      name: "Juventus",
      logo: "https://images.seeklogo.com/logo-png/7/2/juventus-logo-png_seeklogo-76605.png",
      country: "Italy",
      league: "Serie A",
      stadium: "Allianz Stadium",
      votes: 1,
      players: [
        "Szczęsny",
        "Danilo",
        "Bremer",
        "Gatti",
        "Sandro",
        "Locatelli",
        "Rabiot",
        "Fagioli",
        "Chiesa",
        "Vlahović",
        "Yildiz",
      ],
    },
    {
      name: "Barcelona",
      logo: "https://images.seeklogo.com/logo-png/5/2/fc-barcelona-logo-png_seeklogo-52469.png",
      country: "Spain",
      league: "La Liga",
      stadium: "Camp Nou",
      votes: 6,
      players: [
        "Ter Stegen",
        "Koundé",
        "Araujo",
        "Christensen",
        "Balde",
        "De Jong",
        "Gündoğan",
        "Pedri",
        "Yamal",
        "Lewandowski",
        "Félix",
      ],
    },
    {
      name: "City",
      logo: "https://images.seeklogo.com/logo-png/20/2/manchester-city-fc-logo-png_seeklogo-201668.png",
      country: "England",
      league: "Premier League",
      stadium: "Etihad Stadium",
      votes: 7,
      players: [
        "Ederson",
        "Walker",
        "Rúben Dias",
        "Akanji",
        "Gvardiol",
        "Rodri",
        "De Bruyne",
        "Bernardo Silva",
        "Foden",
        "Haaland",
        "Doku",
      ],
    },
    {
      name: "Milan",
      logo: "https://images.seeklogo.com/logo-png/50/2/ac-milan-logo-png_seeklogo-504154.png",
      country: "Italy",
      league: "Serie A",
      stadium: "San Siro",
      votes: 4,
      players: [
        "Maignan",
        "Calabria",
        "Tomori",
        "Thiaw",
        "Theo Hernandez",
        "Loftus-Cheek",
        "Reijnders",
        "Bennacer",
        "Pulisic",
        "Leão",
        "Jović",
      ],
    },
  ];

  try {
    await Team.create(teams);
    res.status(201).json({ message: "Database populated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error populating database", error: error.message });
  }
};
