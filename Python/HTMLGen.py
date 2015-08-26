__author__ = 'benjamindowns'

class HTMLGen:

    def __init__(self):
        pass

    def p(self, content):
#     ''produces html paragraph tags around content''
        self.content = content
        return "<p>{0}</p>".format(content)

    def a(self, content):
#     ""produces html paragraph tags around content""
        self.content = content
        return "<a>{0}</a>".format(content)

    def b(self, content):
        self.content = content
        return "<b>{0}</b>".format(content)

    def body(self, content):
        self.content = content
        return "<body>{0}</body>".format(content)

    def div(self, content):
        self.content = content
        return "<div>{0}</div>".format(content)

    def span(self, content):
        self.content = content
        return "<span>{0}</span>".format(content)

    def title(self, content):
        self.content = content
        return "<title>{0}</title>".format(content)

    def comment(self, content):
        self.content = content
        return "<!--{0}-->".format(content)


htmlGen = HTMLGen()


htmlGen.a('test')
