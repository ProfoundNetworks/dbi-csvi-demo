# default_cell

## Description

This is a Jupyter Notebook extension that helps make the demo smoother.
It performs two key roles:

1. Sniff the magic_url from the querystring.
2. Enables the user to run the notebook automatically.

So, you append the following query string to the notebook URL:

    ?magic_url=...&autorun=true

to reap the benefits.
This saves the user a little bit of manual effort.

## How to get this to work

First, install the Jupyter Notebook extension functionality:

    pip install jupyter_contrib_nbextensions

Then install the extension:

    python default_cell/install.py
    jupyter nbextension enable --py default_cell

Foro more, see:

- https://github.com/binder-examples/jupyter-extension 
- https://towardsdatascience.com/how-to-write-a-jupyter-notebook-extension-a63f9578a38c (helpful, but a bit out of date)

## Implementation details

The auto-start is hacky.  It uses a timer to run everything a few seconds after the notebook has finished loading.

We base64-encode the magic URL to prevent it from getting butchered by the JavaScript in the extension.
