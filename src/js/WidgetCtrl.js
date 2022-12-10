export default class WidgetCtrl {
  constructor(text, lat, long) {
    this.name = 'user';
    this.text = text;
    this.date = new Date();
    this.lat = lat;
    this.long = long;
  }

  // saveItem(){

  // }

  renderItem() {
    const boxRender = document.querySelector('.box_widget');
    boxRender.insertAdjacentHTML('afterbegin', `
    <div class="item_box">
      <div class="item_date">${this.renderDate()} ${this.renderTime()}</div>
      <p>${this.text}</p>
      <div class="item_geoloc">[${this.lat}, ${this.long}]</div>
    </div>`);
  }

  renderDate() {
    return `${this.date.getDay()}.${this.date.getMonth()}.${this.date.getFullYear()}`;
  }

  renderTime() {
    return `${this.date.getHours()}:${this.date.getMinutes()}`;
  }
}
