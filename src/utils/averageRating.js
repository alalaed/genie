import StarRatings from "react-star-ratings";

export const average = (p) => {
  if (p && p.ratings) {
    let ratingsArray = p && p.ratings;
    let total = [];
    let length = ratingsArray.length;

    ratingsArray.map((r) => total.push(r.star));
    let totalReduced = total.reduce((p, n) => p + n, 0);
    console.log("totalReduced", totalReduced);
    let highest = length * 5;
    let result = (totalReduced * 5) / highest;
    console.log("result", result);

    return (
      <div className="my-2 w-100 d-flex ">
        <StarRatings
          rating={result}
          starDimension="1.2rem"
          starSpacing="2px"
          starRatedColor="gold"
          editing={false}
        />
        <div className="ms-2"> ({p.ratings.length})</div>
      </div>
    );
  }
};
