const AFF = {
  AMAZON: "https://amzn.to/3L46fn2",
  EL_CORTE_INGLES: "https://tidd.ly/4aEdfSb",
  MEDIAMARKT: "https://www.mediamarkt.es",
  DECATHLON: "https://www.decathlon.es"
};

function go(key) {
  window.location.href = AFF[key];
}
