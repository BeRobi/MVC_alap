class AdatView {
  constructor(szoveg, szuloElem) {
    // ha rákattintunk a gombra, a p tag-ben írja ki a kapott szöveget
    this.szuloElem = szuloElem;
    this.pElem = this.szuloElem.children("p");
    this.buttonElem = this.szuloElem.children("button");
    this.szoveg = szoveg;
    this.setPelem(this.szoveg);
    this.buttonElem.on("click", () => {
      console.log("katt");
      this.#esemenyTrigger("adatKeres")
    });
  }
  setPelem(ertek) {
    this.pElem.append(ertek);
  }
  #esemenyTrigger(esemenynev) {
    const e = new CustomEvent(esemenynev, { detail: this });
    window.dispatchEvent(e);
  }
}
export default AdatView;
