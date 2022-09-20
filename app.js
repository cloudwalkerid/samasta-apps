(function ($) {

  var app = $.sammy('#app', function () {
    this.use('Template');

    /* this.around(function (callback) {
      var context = this;
      this.load('data/articles.json')
        .then(function (items) {
          context.items = items;
        })
        .then(callback);
    }); */
    /*
        this.get('#/', function(context) {
          context.app.swap('');
          $.each(this.items, function(i, item) {
            context.render('templates/article.template', {id: i, item: item})
                   .appendTo(context.$element());
          });
        });
     */

    // dashboard
    this.get('#/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/dashboard.html', {})
        .appendTo(context.$element());
    });

    this.get('#/samasta1/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/samasta1.html', {})
        .appendTo(context.$element());
    });
    this.get('#/samasta-1/:page/', function (context) {
      //var halKuesioner = this.params('page');
      var halKuesioner = this.params['page'];
      var pathKuesioner = "templates/samasta-1/" + halKuesioner + ".html";
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render(pathKuesioner, {})
        .appendTo(context.$element());
    });

    this.get('#/samasta2/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/samasta2.html', {})
        .appendTo(context.$element());
    });
    this.get('#/samasta-2/:page/', function (context) {
      //var halKuesioner = this.params('page');
      var halKuesioner = this.params['page'];
      var pathKuesioner = "templates/samasta-2/" + halKuesioner + ".html";
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render(pathKuesioner, {})
        .appendTo(context.$element());
    });

    this.get('#/samasta3/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/samasta3.html', {})
        .appendTo(context.$element());
    });
    this.get('#/samasta-3/:page/', function (context) {
      //var halKuesioner = this.params('page');
      var halKuesioner = this.params['page'];
      var pathKuesioner = "templates/samasta-3/" + halKuesioner + ".html";
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render(pathKuesioner, {})
        .appendTo(context.$element());
    });

    // reports
    this.get('#/progress/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/progress.html', {})
        .appendTo(context.$element());
    });
    this.get('#/tabulasi/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/tabulasi.html', {})
        .appendTo(context.$element());
    });

    // masters
    this.get('#/wilayah/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/wilayah.html', {})
        .appendTo(context.$element());
    });

    this.get('#/operator/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/operator.html', {})
        .appendTo(context.$element());
    });


    // utilities

    this.get('#/revalidasi/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/revalidasi.html', {})
        .appendTo(context.$element());
    });
    this.get('#/backup-data/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/backup-data.html', {})
        .appendTo(context.$element());
    });
    this.get('#/gabung-data/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/gabung-data.html', {})
        .appendTo(context.$element());
    });
    this.get('#/export-data/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/export-data.html', {})
        .appendTo(context.$element());
    });

    this.get('#/master/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/master.template', {})
        .appendTo(context.$element());
    });

    this.get('#/settings/', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/settings.html', {})
        .appendTo(context.$element());
    });

    /* this.get('#/article/:id', function (context) {
      this.item = this.items[this.params['id']];
      if (!this.item) { return this.notFound(); }
      this.partial('templates/article-detail.template');
    }); */


    this.before('.*', function () {

      var hash = document.location.hash;
      $("nav").find("a").removeClass("current");
      $("nav").find("a[href='" + hash + "']").addClass("current");
    });

  });

  $(function () {
    app.run('#/');
  });

})(jQuery);