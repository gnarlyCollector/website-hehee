toggleSpoiler: function () {
      if (this.parentNode.parentNode.classList.contains("closed")) {
        this.value = this.getAttribute("data-close");
        this.parentNode.parentNode.classList.remove("closed");
        this.parentNode.parentNode.classList.add("open");
      } else if (this.parentNode.parentNode.classList.contains("open")) {
        this.value = this.getAttribute("data-open");
        this.parentNode.parentNode.classList.remove("open");
        this.parentNode.parentNode.classList.add("closed");
      }