/**
 * Created by ylt on 16/8/30.
 */

if (UNIT_TEST) {


    var uexLogCase = {
        "sendLog": function () {

            for (var i=0;i<100;i++){
                uexLog.sendLog("-----------------log-"+i+"-----------------");
            }

            UNIT_TEST.assert(true);
        }
    };

    UNIT_TEST.addCase("uexLog", uexLogCase);
}
