
      function updateTime() {
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
          timeElement.textContent = Date.now();
        }
      }


      document.addEventListener('DOMContentLoaded', function() {

        updateTime();
        
        
        setInterval(updateTime, 1000);


        const links = document.querySelectorAll('a');
        links.forEach(link => {
          link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
              this.click();
            }
          });
        });
      });