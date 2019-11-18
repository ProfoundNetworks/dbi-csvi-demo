function execute() {
    console.info('execute() called');
    Jupyter.notebook.execute_all_cells();
}

function main(Jupyter) {
    var add_cell = function() {
        var searchParams = new URL(window.location.href).searchParams;
        var text='';
        var autorun = false;
        searchParams.forEach(
            function(value, key) {
                if (key == 'autorun') {
                    autorun = (value == 'true');
                    text += "# autorun: true\n";
                } else if (key != 'filepath') {
                    text += key + ' = ' + value + '\n';
                }
            }
        );

        if (text != '') {
            text = '# Autoinserted, see default_cell/README.md.\n';
            text += '# Delete this cell before saving the notebook!\n";
            text += text;
            Jupyter.notebook.select(0)
            cell = Jupyter.notebook.insert_cell_below('code')
            cell.set_text(text.substring(0, text.length - 1));
        }
        if (autorun){
            // Kick off a timer, can't work out a better way to do this
            //Jupyter.notebook.restart_run_all();
            window.setTimeout(execute, 3000);
        }
    };

    return {load_ipython_extension: add_cell};
}

define(['base/js/namespace'], main);
