(function($) {
  $.fn.vino = function(_length) {
    return this.each(function() {

      // Amount of words required
      var length = _length || $(this).data('vino') || (Math.floor(Math.random() * 50) + 3);

      // Helper functions
      var charAtEndOfOut = function(char, step) {
        return out.indexOf(char, out.length - step - 1) !== -1;
      }
      var randomWord = function() {
        return words[Math.floor(Math.random() * (words.length - 1))];
      }
      var capitalize = function(word) {
        return word[0].toUpperCase() + word.slice(1)
      }

      // Dictionary of words
      var paragraph = "a about above accordance according acid acidic acidity acres added adding aerate africa after age aged ages aging aid air alcohol all allowing almost along alsace also altitude amarone america american amontillado amount amounts an ancient and and/or annual another any aoc aocs appears appellation applied applies approved are area argentina arguably aroma aromas aromatic as astringent at attached australia australian austria ava bacchus back balance balanced bank barbaresco barbera barolo barrel barrels barrique base be beaujolais because become been beerenauslese before behind beneficial best between blanc blancs blend blended blending blends blush bodega body bordeaux both botryt's botrytis botrytized bottle bottled bottles bottling bouquet bourgeois brandy breathe brix brownish brunello brut bud-producing bureau burgundy business but butter buys by cabernet california called can canada cap capable capture castle catawba category causes cava cellar cells central century certain chablis champagne champagnes chaptalization character characteristics chardonnay chateau cheap chemical-based chenin cherry chianti chile chore cinerea cinsault city claret clarification clarified classe climate cloh clos coast coastal color combination combined commercial common commonly company component compounds concentrate concord containing controlee controllata controlled converted cool cooperative cork corked corvina cotes could countries creamier create created crianza crisp croatia crossing cru crushed darker date de decades decant degree del denominacion denominated denominazione depth derogatory describe dessert destroyed determinant determines di die different dionysus diorigine diploma disgorge disputed do doc doesnit dolcetto dosage douro dozen dried driest drinking dry due duero during earthy east eastern egg eiswein either element elements elsewhere end english english-speaking enjoyed enjoys enologist enology enophile entirely environment enzymes equal especially established estate estuary ethyl europe every exceedingly exclusively exist existing exposed expressed extensively extra extracted extracts extremely factors famous ferment fermentation fermented fermenting fertilizers fifteenth filtration final fining fino firearms first five flavor flavorful flavors fleshy for fortified found fragrant franc france french fresh from frozen fruit fruity full fumé furmint future futures gaia gallons gamay garnacha garonne generally genetic german germany germanyis gewuerztraminer gewürztraminer gironde gives go god going good governed graft gran grand grape grapes grapevine grappa grayish-purple great greece green grenache grigio gris grow growers growing grown growth' grüner hailing harmonious harmony harsh harsher harvest harvested has haut have hearty heavy hectare hectoliter her herbaceous herbal herbicides heritage high high-quality higher higher-alcohol highly hilly his holding hollow hot how hungary hybrid hybrids hydrogen ice ie imparted imparting impression in include increase increasingly indicating indication individual influence inherent inside interaction interacts into introduced introduction is island issue it italian italy its jeroboam jewish jointly juice juicy just kabinett key knowledge known kosher labels labrusca lactic large largely late late-harvest lauded leading leafy lean least leaving lees left legal legs less letting level light like literally liters loire long longer longevity louse lyons macabeo maceration machine made madeira maderized magnum make makes making malbec malic malolactic malvasia many manzanilla marc margaux mass may meaning means measure medium medoc merlot meters methods metric meunier milliliters minerally ml mold mondavi montalcino more morellino morocco moscato most mostly mouthfeel moving much mueller-thurgau multiple multiplying mushroomy must musty name named native natural naturally nebbiolo negociant new no noble noir noirs north northeast northern northwest nose not notes nouveau nova november now nuits-st-georges oak oakier oaky occurring of off often older oloroso on once one one's only open opposite or orange order oregon organic organisms origen origin origin' origine other others outside over oversized own owned oxidization oxidized palate parellada paris part particular pauillac perceived percent period person pesticides ph phenolic phylloxera piedmont pink pinot pinotage pits planted plants plonk plump pomace poor-tasting popcorn popular port portugal portuguese potentially powerful premier press pressing previous primarily prime primeur prior process producers producing product production productive professional prominent pronounced provide pruning purpose qualifiers quality quarter-bottle rabbinical racking racks racy ranking rather red referred refreshing regarded region regions regular regulated related release removed renowned requires reserva reserve resulting rhone rhône ribera richer riddling riesling rieslings rioja rise river robert roman room root rose rosé rotating ruby rules salmon same sancerre sangiovese santo sauternes sauvignon say scale scansano scenic scent science scientific scientists secondary section sediment sediments semillon semisweet separate set sharp sharpness sherry shift shipper shiraz shrivel signature silky sill similar since single-serving six skins smells smooth soft soil soil-like sold solera solids someone sommelier sorts south southern southwest spain spanish sparingly sparkling specific spent spicy spirit split square st-estephe stack stainless states steel steely stemming stemmy stems steward sticks stored' stretching strict structure studies style styles subregions succulent such sugar sugars sum super superior supervision supple surrounded suspended sweet sweetened sweetness swirling synonymous syrah system sémillon table tainted tank tanks tannic tannins tawny tca technically technique tempranillo term terroir texture than that thatis the then thereby they third this those three through throughout thursday time to toast tobacco together tokay too top toward town traditional traditionally transferring transformed trebbiano trichloroanisol trigger trimming trocken turn tuscan tuscany two type types ultimate unapproved unctuous under underripe unfermented united until up used usually valley variations varietal varieties various vegetal veltliner veneto very vessel via vila villages vin vine vines vineyard vineyards vintage viognier viticultural viticulture voracious walls was washington weight well well-known were west what where whereby whether which while white whites who whole widely will wine wine's wine-producing wineglass wineis winemaker winery wines with without wood woody word world xarello year years yeast yeasts yield yields young zealand zinfandel ",
        words = paragraph.split(" "),
        word = "",
        out = capitalize(randomWord());

      for (var i = 1; i < length; i = i + 1) {
        //Select random word from paragraph
        word = randomWord();
        out += " ";

        //Append to out, capitalize first letter if necessary
        out += (charAtEndOfOut('.', 1) || charAtEndOfOut('?', 1)) ? capitalize(word) : word.toLowerCase();
      }

      //Append full stop to the end of string, strip punctuation if necessary
      out = (charAtEndOfOut('.') || charAtEndOfOut(',') || charAtEndOfOut('?')) ? out.slice(0, -1) + "." : out + ".";

      if ($(this).is('input'))
        $(this).val(out);
      else
        $(this).text(out);

    });
  }

  $("[data-vino]").vino();

})(jQuery);