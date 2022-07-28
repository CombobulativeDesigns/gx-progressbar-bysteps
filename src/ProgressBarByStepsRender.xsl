<?xml version='1.0'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxml="urn:schemas-microsoft-com:xslt"
	xmlns:gx="urn:shemas-artech-com:gx"
	exclude-result-prefixes="msxml gx"
	xmlns:gxca="urn:GXControlAdap">
  <xsl:output method="html"/>
  <xsl:template match="/" >
    <xsl:apply-templates select="/GxControl"/>
  </xsl:template>
  <xsl:template match="GxControl">
    <xsl:choose>
      <xsl:when test="@type = 'ProgressBarBySteps'">
        <xsl:call-template name="RenderProgressBarBySteps"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- progressBarBySteps design render -->
  <xsl:template name="RenderProgressBarBySteps">
    <span atomicselection="true">
      <xsl:call-template name="AddStyleAttribute"/>
      <table>
        <TBody>
          <TR>
            <img style="background-repeat: no-repeat;" padding="0">
              <xsl:attribute name ="src">
                <xsl:value-of select='gxca:GetMyPath()'/>
                <xsl:text>\ProgressBarByStepsPreview.png</xsl:text>
              </xsl:attribute>
            </img>
          </TR>
        </TBody>
      </table> 
    </span>
  </xsl:template>

  <!-- Helpers Templates -->
  <xsl:template name="AddStyleAttribute" >
    <xsl:variable name="Style">
      <xsl:text>width:155px; </xsl:text>
      <xsl:text>height:55px; </xsl:text>
      <xsl:text>border-style: solid;	border-width: 2px;</xsl:text>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
  </xsl:template>
</xsl:stylesheet>
