def chromosome_check(sperm):
    return 'Congratulations! You\'re going to have a {}.'.format('son' if 'Y' in sperm else 'daughter')


    return 'Congratulations! You\'re going to have a son.' if sperm == 'XY' else 'Congratulations! You\'re going to have a daughter.'