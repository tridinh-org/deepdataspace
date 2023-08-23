"""
deepdataspace.scripts
This module adds convenient console commands for the dds services.
"""
import os

import click

from deepdataspace.constants import RunningEnv
from deepdataspace.services import config

env = os.environ.get("DDS_DEPLOY", RunningEnv.Local)


@click.group
def ddsop():
    if env == RunningEnv.Local and not config.load_all_env():  # load the configurations generated by dds command
        exit(0)


from deepdataspace.scripts.user_cmds import useradd
from deepdataspace.scripts.user_cmds import userban
from deepdataspace.scripts.user_cmds import userunban
from deepdataspace.scripts.user_cmds import userreset
from deepdataspace.scripts.enter_shell import enter_shell
from deepdataspace.scripts.dataset_cmds import import_all
from deepdataspace.scripts.dataset_cmds import import_one
from deepdataspace.scripts.dataset_cmds import delete_one
from deepdataspace.scripts.label_project_cmds import lp_export
from deepdataspace.scripts.migrate import migrate
