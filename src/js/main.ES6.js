/**
 * Created by Павел on 07.04.2017.
 */
function checkNumber(number) {
    if (number < 0) return 3;
    if (number > 3) return 0;
    return number
}
$(document).ready(() => {
    let featureCurrent, $featureItems = $(".features__item");
    $(".features__controls-left").click(() => {
        featureCurrent = $(".features__item_active").index();
        $featureItems.eq(featureCurrent).removeClass("features__item_active").addClass("features__item_next");
        $featureItems.eq(checkNumber(featureCurrent - 1)).removeClass("features__item_prev").addClass("features__item_active");
        $featureItems.eq(checkNumber(featureCurrent + 1)).removeClass("features__item_next");
        $featureItems.eq(checkNumber(featureCurrent - 1) - 1).addClass("features__item_prev");
    });
    $(".features__controls-right").click(() => {
        featureCurrent = $(".features__item_active").index();
        $featureItems.eq(featureCurrent).removeClass("features__item_active").addClass("features__item_prev");
        $featureItems.eq(checkNumber(featureCurrent + 1)).removeClass("features__item_next").addClass("features__item_active");
        $featureItems.eq(checkNumber(featureCurrent - 1)).removeClass("features__item_prev");
        $featureItems.eq(checkNumber(checkNumber(featureCurrent + 1) + 1)).addClass("features__item_next");
        console.log(checkNumber(checkNumber(featureCurrent + 1)) + 1,);
    });
    $(".navbar-toggle").click(()=>{
        $("#header__nav").toggle(500);
    });
});