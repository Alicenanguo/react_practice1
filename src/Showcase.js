import PokeImage from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";

  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>

      <img
        style={{ height: 500, width: 500, padding: 20, borderRadius: "50%" }}
        src={PokeImage}
        alt={favPokemon}
      />

      <h2>
        {favPokemon}'s type is{" "}
        <span className="poke_type">{pokeCharacteristics.type}</span> and one of
        their moves is{" "}
        <span className="poke_move">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
