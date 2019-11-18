import os
import os.path as P
import shutil
import subprocess

import jupyter_contrib_nbextensions


def main():
    curr_dir = P.dirname(P.abspath(__file__))

    root = P.dirname(jupyter_contrib_nbextensions.__file__)
    default_cell = P.join(root, 'nbextensions', 'default_cell')
    if P.isdir(default_cell):
        shutil.rmtree(default_cell)

    os.mkdir(default_cell)
    for f in ('main.js', 'default_cell.yaml', 'README.md'):
        src = P.join(curr_dir, f)
        dst = P.join(default_cell, f)
        shutil.copy(src, dst)

    subprocess.check_call(['jupyter', 'contrib', 'nbextensions', 'install', '--user'])


if __name__ == '__main__':
    main()
